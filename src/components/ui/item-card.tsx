import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface listCat {
  name: string;
  imgCat: string;
}

export default function ItemCard({ name, imgCat }: listCat) {
  return (
    <div>
      <Card className="h-[350px] w-[300px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Image
                src={imgCat}
                alt="Abyssinian"
                width={250}
                height={250}
                className="h-[250px] w-[250px] object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
