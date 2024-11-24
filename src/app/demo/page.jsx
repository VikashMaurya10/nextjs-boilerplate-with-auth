/**
 * This is the demo page.
 */
import { ImageComponent } from '@/components';
import { delay } from '@/services/core';
import { CarouselDemoes } from './CarouselDemoes';
import { DataTables } from './DataTables';

const DemoAllComponent = async () => {
  await delay(1000);

  return (
    <>
      <section className="grid grid-cols-1 gap-4 font-geistSans text-white setWidth sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-purple-800 p-5 shadow">
          <h1 className="text-center text-xl">Image component with blured state</h1>
          <ImageComponent
            width={450}
            height={400}
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50c"
            className="mt-4 aspect-video w-full"
          />
        </div>

        <div className="rounded-lg bg-purple-800 p-5 shadow">
          <h1 className="text-center text-xl">Image component with 404 or null src path</h1>
          <ImageComponent
            width={450}
            height={250}
            src="https://images.unsplash.com/photo-1621961458348-f013d219b50"
            className="mt-4 aspect-video w-full"
          />
        </div>
      </section>

      <section className="mt-5 font-geistSans">
        <div className="rounded-lg bg-purple-800 px-3 py-4 shadow setWidth">
          <h1 className="mb-4 text-center text-xl text-white">Carousel demo</h1>
          <CarouselDemoes />
        </div>
      </section>

      <section className="mt-5 font-geistSans">
        <div className="rounded-lg px-3 py-4 shadow setWidth">
          <h1 className="text-center text-xl text-white">Data Tables</h1>
          <DataTables />
        </div>
      </section>
    </>
  );
};

export default DemoAllComponent;
