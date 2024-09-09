/**
 * v0 by Vercel.
 * @see https://v0.dev/t/12Lspmc3fbZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
      <Card className="w-full max-w-md p-6 bg-card text-card-foreground shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Time Capsule</CardTitle>
          <CardDescription>Create a time capsule to store messages, photos, and videos for the future.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Write a message to your future self or loved ones..."
              className="h-24"
            />
          </div>
          <div>
            <Label htmlFor="delivery-date">Delivery Date</Label>
            <div className="flex items-center gap-2">
              <Input id="delivery-date" type="date" className="flex-1" />
              <Button variant="secondary" size="sm">
                Set Reminder
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="media">Add Media</Label>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ImageIcon className="h-5 w-5" />
                <span className="sr-only">Add Image</span>
              </Button>
              <Button variant="ghost" size="icon">
                <VideoIcon className="h-5 w-5" />
                <span className="sr-only">Add Video</span>
              </Button>
              <Button variant="ghost" size="icon">
                <FileIcon className="h-5 w-5" />
                <span className="sr-only">Add File</span>
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="ghost">Cancel</Button>
          <Button>Create Time Capsule</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}