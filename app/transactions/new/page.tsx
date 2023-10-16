"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

type Props = {};

function page({}: Props) {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Summary" />
      </TextField.Root>
      <TextField.Root>
        <TextField.Input placeholder="Category" />
      </TextField.Root>
      <TextField.Root>
        <TextField.Input placeholder="Currency" />
      </TextField.Root>
      <TextField.Root>
        <TextField.Input placeholder="Sum" />
      </TextField.Root>
      <SimpleMDE placeholder="Description"></SimpleMDE>
      <Button>New Transaction</Button>
    </div>
  );
}

export default page;
