function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
      <p className="text-lg text-gray-700">Loading data</p>
    </div>
  );
}

export default Spinner;
