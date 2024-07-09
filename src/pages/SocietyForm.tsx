import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const SocietyForm = () => {
  const [society, setSociety] = useState({
    "SocietyName": "",
    "SocietyHead": "",
    "SocietyType": "", // tech or non tech
    "SocietyCoordinator": "",
    "SocietyDescription": "" // textarea
  });
  return (
    <div className="container py-24 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Create Society
      </h2>
      <div className='container'>      
        {/* updating textual fields */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='space-y-5'>
            {['SocietyName', 'SocietyHead', 'SocietyCoordinator'].map((field, idx) => {
              return(
                <div key={idx} className='space-y-1'>
                  <Label htmlFor={`course${field}`}>{field}</Label>
                  <Input onChange={(e) => setSociety({...society, [field]: e.target.value})} placeholder={field} value={society[field]} id={`society${field}`} type="text" />
                </div>
              )
            })}
            <div>
              <Label htmlFor="SocietyType">SocietyType</Label>
              <RadioGroup className='pt-2' id='SocietyType' defaultValue="comfortable" onValueChange={(value) => setSociety({...society, ["SocietyType"]: value})}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tech" id="r1" />
                  <Label htmlFor="r1">Tech</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-tech" id="r2" />
                  <Label htmlFor="r2">Non Tech</Label>
                </div>
              </RadioGroup>
            </div>
            <div className='mt-2'>
              <Label htmlFor={'description'}>{'description'}</Label>
              <Textarea onChange={(e) => setSociety({...society, ['SocietyDescription']: e.target.value})} placeholder={'SocietyDescription'} value={society['SocietyDescription']} id={'SocietyDescription'} />
            </div>
            <Button className='w-full mt-5'>Create</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocietyForm