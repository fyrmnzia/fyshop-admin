"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Buat Store"
      description="Tambahkkan store untuk membuat produk dan kategori"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Store form
    </Modal>
  );
};
