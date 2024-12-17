import React from "react";

const ShippingRefundPol = () => {
  return (
    <section>
      <div className="div-info">
        <div>
          <p className="heading-info">Introduction to Shipping Policy</p>
          <p className="para">
            At Spaceframe, we are committed to delivering your products swiftly
            and securely. Here’s how we ensure a smooth shipping process:
          </p>
          <ul>
            <li className="para">
              Shipping Options: Spaceframe offers various shipping options,
              including Standard, Express, and International Shipping, to
              accommodate your needs. Fast Shipping is available for eligible
              products and regions.
            </li>
            <li className="para">
              Processing Times: Orders are processed within 1-2 business days.
              Fast Shipping orders placed before 3 PM (local warehouse time) are
              dispatched the same day.
            </li>
            <li className="para">
              Delivery Times: Delivery times vary based on the shipping option
              chosen and your location. Standard shipping typically takes 3-5
              business days domestically, while international shipping can take
              7-14 business days, depending on customs clearance.
            </li>
            <li className="para">
              Shipping Costs: Shipping costs are calculated based on the weight,
              size, and destination of your order. Detailed costs will be
              provided at checkout.
            </li>
            <li className="para">
              Tracking: Every order is provided with a tracking number.
              Customers will receive email notifications with tracking details
              to monitor their delivery status.
            </li>
            <li className="para">
              International Orders: Please note that international orders may be
              subject to customs duties and taxes, which are the responsibility
              of the recipient.
            </li>
          </ul>
        </div>

        <div>
          <p className="heading-info">Refund Policy</p>
          <p className="para">
            Your satisfaction is our top priority. If you're not completely
            happy with your purchase, here’s how our refund process works:
          </p>
          <ul>
            <li className="para">
              Return Eligibility: Items can be returned within 30 days of
              receipt. To be eligible for a return, items must be unused, in the
              original packaging, and in the same condition that you received
              them.
            </li>
            <li className="para">
              Return Process: To initiate a return, please contact our customer
              service team at support@spaceframe.com. We will provide you with a
              return shipping label and instructions on how to send your items
              back to us.
            </li>
            <li className="para">
              Refunds: Once your return is received and inspected, we will send
              you an email to notify you of the approval or rejection of your
              refund. If approved, your refund will be processed, and a credit
              will automatically be applied to your original method of payment,
              within a certain amount of days.
            </li>
            <li className="para">
              Exchanges: We only replace items if they are defective or damaged.
              If you need to exchange it for the same item, send us an email at
              support@spaceframe.com.
            </li>
            <li className="para">
              Shipping Costs for Returns: If the return is due to an error on
              our part (received an incorrect or defective item, etc.), we will
              cover the return shipping costs. Otherwise, customers are
              responsible for return shipping fees.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShippingRefundPol;
