function Spinner() {
  return (
    <svg
      className="animate-spin ml-5 mr-3 mt-3 h-20 w-20 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    // <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg">
    //   <circle
    //     r="10"
    //     cx="12"
    //     cy="12"
    //     fill="none"
    //     stroke="white"
    //     opacity="25%"
    //     stroke-width="4"
    //   />
    //   <path
    //     className="opacity-75"
    //     fill="white"
    //     opacity="75%"
    //     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    //   ></path>
    // </svg>
  );
}

export default Spinner;
