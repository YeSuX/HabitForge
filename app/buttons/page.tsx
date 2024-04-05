import { Button } from '@/components/ui/button'
import React from 'react'

function buttonPage() {
  return (
    <div className='flex flex-col max-w-32 gap-2'>
      <Button variant='default'>click</Button>
      <Button variant='destructive'>click</Button>
      <Button variant='ghost'>click</Button>
      <Button variant={'link'}>click</Button>
      <Button variant={'outline'}>click</Button>
      <Button variant={'secondary'}>click</Button>
    </div>
  )
}

export default buttonPage
