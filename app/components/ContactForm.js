export default function ContactForm() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)] flex justify-center items-center p-8">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="text-white text-2xl font-bold leading-tight">
            <p>GET IN TOUCH</p>
            <p>HAVE QUESTIONS</p>
            <p>ABOUT YOUR</p>
            <p>JOURNEY? WE’RE</p>
            <p>HERE TO GUIDE</p>
            <p>YOU.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div>
              <label className="block mb-2">FIRST NAME*</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="w-full p-2 border border-white bg-transparent"
              />
            </div>
            <div>
              <label className="block mb-2">LAST NAME*</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="w-full p-2 border border-white bg-transparent"
              />
            </div>
            <div>
              <label className="block mb-2">YOUR PHONE*</label>
              <input
                type="text"
                placeholder="+44 3737 838xxx"
                className="w-full p-2 border border-white bg-transparent"
              />
            </div>
            <div>
              <label className="block mb-2">YOUR EMAIL*</label>
              <input
                type="email"
                placeholder="youremail@domain.com"
                className="w-full p-2 border border-white bg-transparent"
              />
            </div>
            <div>
              <label className="block mb-2">SERVICES*</label>
              <select className="w-full p-2 border border-white bg-transparent">
                <option>Choose services</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">DATE*</label>
              <input
                type="date"
                className="w-full p-2 border border-white bg-transparent"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <button className="bg-[#8B0000] text-white py-2 px-4 rounded-full w-full">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }