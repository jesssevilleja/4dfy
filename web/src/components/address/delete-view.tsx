import ConfirmationCard from '@/components/ui/cards/confirmation';
import {
  useModalAction,
  useModalState,
} from '@/components/ui/modal/modal.context';
import { useDeleteAddress } from '@/framework/user';

export default function AddressDeleteView() {
  const {
    data: { id },
  } = useModalState();
  const { closeModal } = useModalAction();
  const { mutate: deleteAddressById, isLoading } = useDeleteAddress();

  function handleDelete() {
    if (!id) {
      return;
    }
    deleteAddressById({ id: id });
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={isLoading}
    />
  );
}
