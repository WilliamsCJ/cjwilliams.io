import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Share2Icon, TwitterIcon, LinkedinIcon } from "lucide-react"

export default function ShareButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
      
      >
        <Button variant="brand">
          Share
          <Share2Icon className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Share with ...</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <TwitterIcon className="mr-2 size-4"/>
          Twitter
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LinkedinIcon className="mr-2 size-4" />
          LinkedIn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}