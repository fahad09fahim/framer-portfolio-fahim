export default function Banner() {
  return (
    <div className="relative w-full h-[80vh] bg-[url('https://i.ibb.co/mCTY2sx2/fabg.jpg')] bg-cover  bg-center bg-no-repeat">
      <div className="absolute w-full bottom-0 ">
        <div className="flex justify-between items-center">
          <h1 className="text-7xl font-bold ">
            Md Fahad Al <br /> Fahim
          </h1>
          <p className="text-xl pr-[1.5rem]">A professional Web Developer.</p>
        </div>
      </div>
    </div>
  );
}
