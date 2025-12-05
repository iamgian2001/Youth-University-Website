import { ArrowDown, Paperclip, X } from "lucide-react";
import { useState } from "react";

export type Ticket = {
  id: number;
  title: string;
  date: Date;
  description: string;
  attachmentUrl: string;
  reply: string;
  status: number;
};

const dummyTickets: Ticket[] = [
  {
    id: 1,
    title: "LMS not working",
    date: new Date(2025, 11, 20),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    attachmentUrl: "/tickets/23432/hen.png",
    reply: "Received we are looking into it",
    status: 2,
  },
  {
    id: 2,
    title: "LMS not working LMS not workingLMS not workingLMS not working",
    date: new Date(2025, 0, 5),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    attachmentUrl: "/tickets/23432/hen.png",
    reply: "Received we are looking into it",
    status: 0,
  },
];

export default function StudentSupport() {
  const [openTickets, setOpenTickets] = useState<number[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
  });

  const toggleTicket = (id: number) => {
    setOpenTickets((prev) =>
      prev.includes(id)
        ? prev.filter((ticketId) => ticketId !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: number): boolean => openTickets.includes(id);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!formData.category || !formData.subject || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", { ...formData, files: selectedFiles });
    alert("Ticket submitted successfully!");
    setFormData({ category: "", subject: "", description: "" });
    setSelectedFiles([]);
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="font-heading border-l-8 border-secondary p-3 text-2xl bg-primary/80 text-center mb-5">
        Current Tickets
      </h1>

      <div className="my-5 space-y-3">
        {dummyTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="default-card-style flex flex-col p-3 bg-white rounded-lg shadow"
          >
            <div
              onClick={() => toggleTicket(ticket.id)}
              className="flex justify-between cursor-pointer items-center"
            >
              <p className="basis-1/3 truncate grow-0 font-semibold">
                {ticket.title}
              </p>
              <p className=" text-sm">
                {ticket.date.toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </p>
              <ArrowDown
                className={`transition-transform duration-300 ease-in-out ${
                  isOpen(ticket.id) ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen(ticket.id)
                  ? "max-h-96 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t-2 pt-4 text-gray-100">
                {ticket.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-end mb-5">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-secondary text-primary drop-shadow-2xl hover:bg-amber-200 p-3 rounded-md font-semibold font-cta transition-colors"
        >
          {showForm ? "Cancel" : "Submit a ticket"}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showForm ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="default-card-style rounded-lg shadow-lg p-6 space-y-5">
          <h2 className="text-2xl font-bold  mb-4">Submit Support Ticket</h2>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-100 mb-2"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-4 py-3 border-2  border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
            >
              <option value="">Select a category</option>
              <option value="technical">Examination Issue</option>
              <option value="account">Payment & Billing Issues</option>
              <option value="feature">LMS Issues</option>
              <option value="bug">Inquiries</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-100 mb-2"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Brief description of your issue"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-100 mb-2"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Please provide detailed information about your issue..."
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-y"
            />
          </div>

          <div>
            <label
              htmlFor="attachments"
              className="block text-sm font-semibold text-gray-100 mb-2"
            >
              Attachments (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="attachments"
                name="attachments"
                multiple
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
              />
              <label
                htmlFor="attachments"
                className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors"
              >
                <Paperclip className="mr-2" />
                <span className="text-gray-600">
                  Choose files or drag and drop
                </span>
              </label>
            </div>

            {selectedFiles.length > 0 && (
              <div className="mt-3 space-y-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    <span className="text-sm text-gray-100 truncate">
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-secondary text-primary hover:bg-amber-200 py-3 rounded-lg font-semibold font-cta transition-colors shadow-lg"
          >
            Submit Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
