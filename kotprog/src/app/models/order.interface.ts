export interface Order {
    id: number;
    phoneId: number;
    quantity: number;
    customerName: string;
    address: string;
    paymentMethod: PaymentMethod;
    orderDate: Date;
  }
  
  export enum PaymentMethod {
    CreditCard = 'Credit Card',
    DebitCard = 'Debit Card',
    BankTransfer = 'Bank Transfer',
    Cash = 'Cash on Delivery'
  }