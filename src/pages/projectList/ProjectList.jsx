import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { RadioGroup } from '@radix-ui/react-radio-group'
import React from 'react'

const ProjectList = () => {

    const tags = ["all", "java","spring boot", "react", "nextjs", "nodejs", "mysql", "mongodb", "angular", "python", "flask", "django"]

    const handleFilterChange =(section, value) => {
        console.log("value", value, section)
    }
  return (
    <>
    <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
        <section className='filterSection'>
            <Card className="p-5 sticky top-10">
                <div className='flex justify-between lg:w-[20rem]'>
                    <p className='text-xl -tracking-wider'>filters</p>
                    <Button variant='ghost' size="icon">

                        <MixerHorizontalIcon/>
                    </Button>
                </div>
                <CardContent className='mt-5'>

                    <ScrollArea className='space-y-7 h-[70vh]'>
                        <div>
                            <h1 className='pb-3 text-gray-500 border-b'>
                                Category
                            </h1>
                            <div className='pt-5'>
                                <RadioGroup 
                                className='space-y-3 pt-5'
                                defaultValue="all" onValueChange={(value)=> handleFilterChange('category', value)}>

                                <div className='flex items-center gap-2'>
                                        <RadioGroupItem value='all' id="r1"/>
                                        <Label htmlFor="r1">All</Label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <RadioGroupItem value='fullstack' id="r2"/>
                                        <Label htmlFor="r2">Fullstack</Label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <RadioGroupItem value='backend' id="r3"/>
                                        <Label htmlFor="r3">Backend</Label>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <RadioGroupItem value='frontend' id="r4"/>
                                        <Label htmlFor="r4">Frontend</Label>
                                    </div>
                                    
                                </RadioGroup>
                            </div>
                        </div>
                        <div className='pt-9'>
                            <h1 className='pb-3 text-gray-400 border-b'>
                                Tags
                            </h1>
                            <div className='pt-5'>
                                <RadioGroup 
                                className='space-y-3 pt-5'
                                defaultValue="all" 
                                onValueChange={(value)=> handleFilterChange('tag', value)}>
                                    {tags.map((tag)=> <div key={tag} className='flex items-center gap-2'>
                                        <RadioGroupItem value={tag} id={`r1-${tag}`}/>
                                        <Label htmlFor={`r1-${tag}`}>{tag}</Label>
                                    </div>)}
                                
                                </RadioGroup>
                            </div>
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </section>
        <section className='projetListSection w-full lg:w-[48rem]'></section>
        </div></>
  )
}

export default ProjectList