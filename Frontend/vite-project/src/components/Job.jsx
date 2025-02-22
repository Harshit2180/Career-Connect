import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'

function Job() {
    return (
        <div>
            <p>2 days ago</p>
            <Button variant="outline" className='rounded-full' size="icon"><Bookmark /></Button>
            <Button>
                <Avatar>
                    <AvatarImage />
                </Avatar>
            </Button>
        </div>
    )
}

export default Job