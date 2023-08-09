import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";

const Modal = ({ dialog, closeModal }) => {
  let [isOpen, setIsOpen] = useState(false);
  let completeButtonRef = useRef(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {/* //modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={dialog}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
          initialFocus={completeButtonRef}
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mx-auto rounded bg-white max-w-3xl">
                  <Dialog.Title
                    ref={completeButtonRef}
                    className="text-4xl leading-relaxed text-gray-600 justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                  >
                    kdkgf
                    <div className="block text-2xl font-bold">daf</div>
                    <div className="text-sm block italic">jksadf</div>
                  </Dialog.Title>

                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-md leading-relaxed">
                      ﻿Mrs Victoria Chinedu Uzor (nee Iroegbu) was born in the
                      early 60’s, 1st of April, into the family of Late Nze
                      B.N.C. Iroegbu and Late Ezinne Veronica Iroegbu in
                      Umuarighi, Umuezeala-Ama, Ehime-Mbano L.G.A. Imo State.
                    </p>
                    <p className="my-4 text-slate-500 text-md leading-relaxed">
                      She started her early schooling in Central School
                      Ntalakwu, in the present-day Abia State, had her secondary
                      education at the Girls’ Secondary School, Emekuku, Owerri,
                      Imo State and was admitted into the then Fatima Teachers’
                      Training College (TTC) Nsu in present-day Ehime-Mbano
                      L.G.A. in Imo State.
                    </p>
                    <p className="my-4 text-slate-500 text-md leading-relaxed">
                      She got married to her loving husband, Mr Uzor PaulKevin
                      Onyekachi on November 11, 1990, a blessed union that
                      birthed four children. From 1992 - 2003, she taught in
                      Mary Hill Convent School, Iwo road, Ibadan. Victoria U, as
                      she was fondly called while in Mary Hill Convent School,
                      exhibited her athletic skills by obtaining a myriad of
                      awards and certificates for both Mothers’ and Female Staff
                      races and participating in extracurricular activities like
                      dance and drama.
                    </p>
                    <p className="my-4 text-slate-500 text-md leading-relaxed">
                      To further her formal education, she gained admission into
                      The Polytechnic, Ibadan where she obtained her N.C.E
                      certificate, specialising in Mathematics Education, in
                      1995. While being actively involved in family, work and
                      church activities, Mrs Vicky Uzor went on to obtain a B.Ed
                      in Guidance/Counselling from the University of Ado-Ekiti,
                      Ekiti State, Nigeria in 2001.
                    </p>
                    <p className="my-4 text-slate-500 text-md leading-relaxed">
                      She later joined her husband when work had him posted to
                      Enugu, and got her first teaching appointment with Pine
                      Crest Schools, after which she went on to Martina Egbunike
                      Early Learning Trust—now Hill View Nursery/ Primary
                      Schools. While in that school, she got another appointment
                      at Spring of Life International Schools (SOLIS), Enugu
                      where she retired on health grounds as the Vice Principal
                      of the Primary school
                    </p>
                    <p className="my-4 text-slate-500 text-md leading-relaxed">
                      A devoted wife, hallmark of motherhood, friend indeed,
                      beacon of faith, epitome of goodness; Mrs Victoria Uzor
                      forever remains in our hearts and her legacy will never
                      fade away.
                    </p>
                    <p className="my-4 text-slate-500 text-md leading-relaxed">
                      May her soul rest in perfect peace. Amen.
                    </p>
                  </div>
                  <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => closeModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
