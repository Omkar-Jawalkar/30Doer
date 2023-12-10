const Aboutus = () => {
    return (
        <div className="flex my-6 flex-col justify-center px-4 items-center">
            <h1 className="text-4xl my-6 font-bold">
                About <span className="text-[#2C5F2D]">30 doer</span>
            </h1>

            {/* ABOUT US MORE CONTENT */}
            <p className="font-semibold text-slate-400 text-center">
                A 30-day challenge is a great way to jumpstart a new habit or
                practice.
            </p>
            <p className="font-semibold text-slate-400 text-center">
                Its also a great way to get out of a rut. You can do anything
                for 30 days.
            </p>
            <p className="font-bold mt-6">You can do it! 💪</p>
        </div>
    );
};

export default Aboutus;
