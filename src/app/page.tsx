import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl">
        <div className="p-4 text-center">
          <h1 className="text-3xl">Wellcome to website:</h1>
          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h1 className="text-xl">Lorem ipsum dolor sit.</h1>
          <div className="flex items-center justify-center my-2">
            <div className=" flex items-center gap-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Gabung</Button>
            </div>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quis
            aperiam qui ex iusto eum, reiciendis culpa sequi.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="p-4">
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Coba:</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet consectetur.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Nama:</Label>
                        <Input id="name" placeholder="isi namamu disini" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Kota</Label>
                        <Select>
                          <SelectTrigger id="framework">
                            <SelectValue placeholder="klik ya" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="next">Surabaya</SelectItem>
                            <SelectItem value="sveltekit">Jakarta</SelectItem>
                            <SelectItem value="astro">Jogja</SelectItem>
                            <SelectItem value="nuxt">Bandung</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Batal</Button>
                  <Button>Lanjut</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="p-4 text-center">
              <h1>NB: Ini hanya mencoba yaa</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
