import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { RadioGroup } from '@radix-ui/react-radio-group'
import React, { useState } from 'react'
import ProjectCard from '../project/ProjectCard'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/Redux/Store'
import { fetchProjects, searchProject } from '@/Redux/Project/Action'


export const tags = ["all", "java","spring boot", "react", "nextjs", "nodejs", "mysql", "mongodb", "angular", "python", "flask", "django"]

const ProjectList = () => {

    const [keyword, setKeyword] = useState("")

   const {project} = useSelector(store=>store)

   const dispatch = useDispatch();

    const handleFilterCategory =(value) => {
        if(value === "all"){
            dispatch(fetchProjects({}))
        }else{
            dispatch(fetchProjects({category:value}))
        }
    }

    const handleFilterTag =(value) => {
        if(value=== "all"){
            dispatch(fetchProjects({}))
        }else{
            dispatch(fetchProjects({tag:value}))
        }
    }

    const handleSearchChange =(e) =>{
        setKeyword(e.target.value)
        dispatch(searchProject(e.target.value))
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
                                defaultValue="all" onValueChange={(value)=> handleFilterCategory(value)}>

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
                                onValueChange={(value)=> handleFilterTag(value)}>
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
        <section className='projetListSection w-full lg:w-[48rem]'>
            <div className='flex gap-2 items-center pb-5 justify-between'>
                <div className='relative p-0 w-full'>
                    <Input 
                    onChange= {handleSearchChange}
                    placeholder="search project"className='40% px-9'/>
                    <MagnifyingGlassIcon className='absolute top-3 left-4'/>
                </div>
            </div>
            <div>
                <div className='space-y-5 min-h-[74vh]'>
                    {
                        keyword?project.searchProjects?.map((item, index)=> <ProjectCard key={item.id*index} item={item}/>): project.projects?.map((item)=> <ProjectCard key={item.id} item={item}/>)
                    }
                </div>
            </div>
        </section>
        </div></>
  )
}

export default ProjectList