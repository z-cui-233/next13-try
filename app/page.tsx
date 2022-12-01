// app/page.js

import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

// This file maps to the index route (/)
export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Suspense fallback={"loading slow component"}>
        {/* @ts-expect-error Server Component */}
        <SlowComponent />
      </Suspense>
    </>
  );
}
