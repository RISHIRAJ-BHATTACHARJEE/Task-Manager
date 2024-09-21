import { DialogTitle } from "@headlessui/react";
import ModalWrapper from "./ModalWrapper";
import Button from "./Button";

const ViewNotification = ({ open, setOpen, el }) => {
  return (
    <ModalWrapper open={open} setOpen={setOpen}>
      <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
        <DialogTitle as="h3" className="text-lg font-semibold">
          {el?.task?.title}
        </DialogTitle>

        <p className="text-start text-gray-500">{el?.text}</p>

        <Button
          type="button"
          className="bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto"
          label="OK"
          onClick={() => setOpen(false)}
        />
      </div>
    </ModalWrapper>
  );
};

export default ViewNotification;
