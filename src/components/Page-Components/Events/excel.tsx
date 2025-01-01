import * as XLSX from "xlsx";
import {EventCardType} from "./EventCard";

export const exportEventsToExcel = (
  pastEvents: EventCardType[] | null,
  upcomingEvents: EventCardType[] | null
) => {
  // Combine past and upcoming events
  const pastEventData = pastEvents?.map((event) => ({
    Title: event.Title,
    Date: event.EventDateTime,
    Description: event.Description,
    Location: event.Location,
    Type: "Past",
  })) || [];

  const upcomingEventData = upcomingEvents?.map((event) => ({
    Title: event.Title,
    Date: event.EventDateTime,
    Description: event.Description,
    Location: event.Location,
    Type: "Upcoming",
  })) || [];

  const allEvents = [...pastEventData, ...upcomingEventData];

  // Create worksheet from event data
  const worksheet = XLSX.utils.json_to_sheet(allEvents);

  // Style: Bold headers with yellow background
  const headerCellStyle = {
    font: { bold: true },
    fill: { fgColor: { rgb: "FFFF00" } }, // Yellow background
    alignment: { horizontal: "center" }, // Center alignment
  };

  // Apply the style to each header cell (row 0)
  const range = XLSX.utils.decode_range(worksheet['!ref']!); // Get the range of the worksheet
  for (let col = range.s.c; col <= range.e.c; col++) {
    const headerCell = worksheet[XLSX.utils.encode_cell({ r: 0, c: col })];
    if (headerCell) {
      headerCell.s = headerCellStyle; // Apply style to the header cell
    }
  }

  // Define column widths
  const columnWidths: { [key: string]: number } = {};

  // Adjust column widths based on the longest content
  Object.keys(worksheet).forEach((key) => {
    const col = key.charAt(0); // Get the column letter (e.g., "A", "B", ...)
    if (!columnWidths[col]) columnWidths[col] = 0;
    const cellValue = worksheet[key]?.v || "";
    columnWidths[col] = Math.max(columnWidths[col], cellValue.toString().length);
  });

  // Set column widths
  const wscols = Object.keys(columnWidths).map((col) => ({
    wpx: columnWidths[col] * 10, // Adjust multiplier for desired width
  }));

  worksheet['!cols'] = wscols;

  // Create the workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Events");

  // Generate timestamp for the file name
  const now = new Date();
  const formattedDate = now.toISOString().split("T")[0]; // e.g., "2025-01-02"
  const fileName = `Events_Report_${formattedDate}.xlsx`;

  // Write the file
  XLSX.writeFile(workbook, fileName);
};
