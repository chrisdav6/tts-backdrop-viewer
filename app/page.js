export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center pt-10'>
      <h1 className='text-3xl font-bold'>Backdrop Viewer</h1>

      <nav></nav>

      <div className='flex items-center justify-center w-full gap-4 mt-10'>
        {/* Left */}
        <div className='w-[600px]'>
          <img src='/8footDesignLeft-1ver4.png' alt='Left Image' />
        </div>

        {/* Center */}
        <div className='w-[259.5px]'>
          <img src='/3footDesign-1.png' alt='Center Image' />
        </div>

        {/* Right */}
        <div className='w-[600px]'>
          <img src='/8footDesignLeft-1ver4.png' alt='Right Image' />
        </div>
      </div>
    </main>
  );
}
