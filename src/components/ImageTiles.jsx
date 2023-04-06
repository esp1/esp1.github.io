import { createSignal } from 'solid-js';

export default function ImageTiles(props) {
  const [getModalImageIdx, setModalImageIdx] = createSignal(null);

  const isModalOpen = () => getModalImageIdx() !== null;

  const closeModal = () => setModalImageIdx(null);
  const openModal = (idx) => setModalImageIdx(idx);

  const getModalImage = () => `/assets/${props.images[getModalImageIdx()]}`;
  const incModalImageIdx = (offset) => setModalImageIdx((getModalImageIdx() + offset + props.images.length) % props.images.length);

  return (
    <>
      <div class="m-8 grid grid-cols-4 gap-4 items-center">
        {
          props.images.map((image, idx) => {
            const imageSrc = `/assets/${image}`;
            return (
              <img
                class="cursor-pointer rounded"
                onClick={() => openModal(idx)}
                src={imageSrc}
              />
            );
          })
        }
      </div>

      <div class={`${isModalOpen() ? "block" : "hidden"} fixed top-0 left-0 w-screen h-screen`}>
        <div class="w-screen h-screen backdrop-blur-md flex justify-center">
          {/* previous image */}
          {props.images.length <= 1
            ? <div class="grow" />
            : <button class="hidden lg:block lg:grow lg:grid place-content-center stroke-gray-500 hover:stroke-white stroke-[4px]" type="button" onClick={() => incModalImageIdx(-1)}>
              <svg stroke-linecap="round" width="100" height="100">
                <line x1="70" y1="10" x2="30" y2="50" />
                <line x1="30" y1="50" x2="70" y2="90" />
              </svg>
            </button>
          }

          {/* image */}
          {isModalOpen() &&
            <img
              class="m-8 object-contain"
              src={getModalImage()}
            />
          }

          {/* next image */}
          {props.images.length <= 1
            ? <div class="grow" />
            : <button class="hidden lg:block lg:grow lg:grid place-content-center stroke-gray-500 hover:stroke-white stroke-[4px]" type="button" onClick={() => incModalImageIdx(1)}>
              <svg stroke-linecap="round" width="100" height="100">
                <line x1="30" y1="10" x2="70" y2="50" />
                <line x1="70" y1="50" x2="30" y2="90" />
              </svg>
            </button>
          }
        </div>

        {/* close modal */}
        <button
          class="
            fixed top-0 right-0
            stroke-gray-500 hover:stroke-white stroke-[4px]
          "
          type="button"
          onClick={closeModal}
        >
          <svg width="100" height="100">
            <g stroke-linecap="round">
              <line x1="30" y1="30" x2="70" y2="70" />
              <line x1="30" y1="70" x2="70" y2="30" />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}