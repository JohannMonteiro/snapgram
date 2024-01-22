import { Outlet } from 'react-router-dom'


import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'



const RootLayout = () => {
  return (
    <div className='w-full mid:flex'>
      <Topbar />
      <LeftSidebar />

      <section className='flex flex-1 h-full'>
        <Outlet />
      </section>

      <Bottombar />
    </div>
  )
}

export default RootLayout;