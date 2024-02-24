"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import ListContainer from "@/ListContainer"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

 
const FormSchema = z.object({
  jedzenie: z
    .string({
      required_error: "Wybierz jedzenie!",
    })
})
 
export default function App() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
      return (
        <h1>Wybrałeś</h1>
      )
  }
 
  return (
    <div className="m-6">
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="jedzenie"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jedzenie</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Wybierz" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="warzywa">Warzywa</SelectItem>
                  <SelectItem value="owoce">Owoce</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <ListContainer />
    </div>

  )
}