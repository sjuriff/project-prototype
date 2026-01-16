import RadioExample from "./buttons/payment-radio-buttons";

interface PaymentMethodsProps {
  value: string;
  setValue: (value: string) => void;
 }


export default function PaymentMethods({ value, setValue }: PaymentMethodsProps) {
  return (
    <div className="gap-8 lg:gap-12 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <h1 className="font-heading text-xl text-primary-text mb-4">Velg en betalingmåte</h1>

      <div className="flex gap-12 flex-wrap justify-center max-w-7xl">
        <RadioExample value={value}setValue={setValue}/>


      </div>
    </div>
  );
}