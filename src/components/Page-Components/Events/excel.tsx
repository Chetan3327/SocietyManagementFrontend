import * as XLSX from "xlsx";
import {
    EventCardType,
  } from "./EventCard";

export const exportEventsToExcel = (
  pastEvents: EventCardType[] | null,
  upcomingEvents: EventCardType[] | null
) => {
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

  const worksheet = XLSX.utils.json_to_sheet(allEvents);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Events");

  // Generate timestamp
  const now = new Date();
  const formattedDate = now.toISOString().split("T")[0]; // e.g., "2025-01-02"

  // Use timestamp in the file name
  const fileName = `Events_Report_${formattedDate}.xlsx`;

  XLSX.writeFile(workbook, fileName);
};
