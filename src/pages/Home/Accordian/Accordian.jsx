
const Accordian = () => {
    return (
        <div className="my-20">
            <div className="text-center w-80 lg:w-[600px] mx-auto ">
                <h1 className="text-3xl font-bold text-[#03373D] my-5">Frequently Asked Question (FAQ)</h1>
                <p className="text-gray-700 mb-10">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className="join join-vertical bg-blue-50 rounded-4xl p-10">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
                    <div className="collapse-content text-sm">Yes, the posture corrector is designed with adjustable straps to comfortably fit most ages and body types.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
                    <div className="collapse-content text-sm">Yes, it provides gentle support to align your spine and shoulders, helping reduce back pain and improve posture over time.</div>
                </div>
            </div>
        </div>
    );
};

export default Accordian;