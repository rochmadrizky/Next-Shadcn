import React from "react";
import { CalendarDemo } from "./Calendar";
import { CardWithForm } from "./Card";
import { TabsDemo } from "./Tabs";

const Gabung = () => {
  return (
    <div className="flex items-center p-4 gap-2 justify-center">
      <div>
        <CalendarDemo />
      </div>
      <div>
        <CardWithForm />
      </div>
      <div>
        <TabsDemo />
      </div>
    </div>
  );
};

export default Gabung;
