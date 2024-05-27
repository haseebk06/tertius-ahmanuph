import { useState } from "react";
import "./style.css";

const FAQ = () => {
    // Initialize faqState with false values for each FAQ item
    const [faqState, setFaqState] = useState([false, false, false, false]);

    const toggleFaq = (index) => {
        setFaqState(faqState.map((isOpen, i) => i === index ? !isOpen : isOpen));
    };

    return (
        <section id="faqs">
            <h2 className="text-center py-5">FAQs for SHADERA Dey-Al</h2>

            <div className="border-t border-t-current" tabIndex="0" role="button" onClick={() => toggleFaq(0)}>
                <h3 className="font-bold text-heading py-6 pl-6 pr-20 w-full duration-150 flex items-center justify-between relative after:rounded-full after:bg-current after:w-3 after:h-3 after:block after:absolute after:right-6 opacity-1 text-lg">
                    When will my order ship?
                </h3>
                <div className={`prose pb-5 ${faqState[0] ? "d-block" : "d-none"}`}>
                    <p>For domestic orders please allow 2-3 days for your order to process and 5-7 business days for your order to ship. At this time we cannot give an estimated delivery date for all international orders due to COVID-19.</p>
                </div>
            </div>

            <div className="border-t border-t-current" tabIndex="1" role="button" onClick={() => toggleFaq(1)}>
                <h3 className="font-bold text-heading py-6 pl-6 pr-20 w-full duration-150 flex items-center justify-between relative after:rounded-full after:bg-current after:w-3 after:h-3 after:block after:absolute after:right-6 opacity-1 text-lg">
                    What does it mean if my items are Pre-Order and when will I get them?
                </h3>
                <div className={`prose pb-5 ${faqState[1] ? "d-block" : "d-none"}`}>
                    <p>Pre-Order items are items that have not yet been released but are available to purchase. The estimated ship date, if available, will be located on the product page. As soon as your item has been released and is ready to be sent, you'll receive an email with the estimated delivery date.</p>
                </div>
            </div>

            <div className="border-t border-t-current" tabIndex="2" role="button" onClick={() => toggleFaq(2)}>
                <h3 className="font-bold text-heading py-6 pl-6 pr-20 w-full duration-150 flex items-center justify-between relative after:rounded-full after:bg-current after:w-3 after:h-3 after:block after:absolute after:right-6 opacity-1 text-lg">
                    My pre-order items are taking too long to ship. Can I cancel my order?
                </h3>
                <div className={`prose pb-5 ${faqState[2] ? "d-block" : "d-none"}`}>
                    <p>We are unable to cancel or make any changes to Pre-order items after they have been purchased. All sales are final, no exceptions will be made.</p>
                </div>
            </div>

            <div className="border-t border-t-current" tabIndex="3" role="button" onClick={() => toggleFaq(3)}>
                <h3 className="font-bold text-heading py-6 pl-6 pr-20 w-full duration-150 flex items-center justify-between relative after:rounded-full after:bg-current after:w-3 after:h-3 after:block after:absolute after:right-6 opacity-1 text-lg">
                    What is the return policy?
                </h3>
                <div className={`prose pb-5 ${faqState[3] ? "d-block" : "d-none"}`}>
                    <p>ALL SALES ARE FINAL. We cannot cancel or modify a shipment. In the case of damaged or incorrect goods received, please contact Customer Service immediately to review and resolve.</p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
