const TaxiUnion = () => {
  const contactList = [
    { name: "Purola", number: "+918126123453" },
    { name: "Barkot", number: "+917060737220" },
    { name: "Naugaon", number: "+919411146494" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 text-white bg-black rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-2">Taxi Union Contact List</h2>

      <ul className="space-y-4">
        {contactList.map((contact, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-md transition-all"
          >
            <span className="font-medium text-lg">{contact.name}</span>
            <a
              href={`tel:${contact.number}`}
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold underline"
            >
              {contact.number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaxiUnion;
