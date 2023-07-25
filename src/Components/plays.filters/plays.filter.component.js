import { Disclosure } from '@headlessui/react'
import{ BsChevronDown,BsChevronUp} from "react-icons/bs";

const PlaysFilters=(props) =>{
  return (
    <Disclosure>
    {({ open }) => (
     <>
     <Disclosure.Button className="p-2  flex items-center gap-3">
       {open ? <BsChevronUp/> : <BsChevronDown/>}
       <span className={open ? "text-red-500" :"text-grey-700"}> {props.title}</span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
       <div className='flex flex-wrap items-center p-2  gap-3 '>
       {props.tags.map((tag)=>
        <>
        <div className='border-2  rounded-md p-1'>
          <span className='text-red-500 text-md'>
            {tag}
          </span>

        </div>
        </>
        )}
       </div>
      </Disclosure.Panel></>
    )}
  
     
    </Disclosure>
  )
}
export default PlaysFilters;