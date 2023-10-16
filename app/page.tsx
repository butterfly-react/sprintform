import Image from 'next/image'
import DashboardPage from './dashboard/page'



export default async function Home() {

  return (
    <main className='p-5'>
      <DashboardPage />

    </main>
  )
}
