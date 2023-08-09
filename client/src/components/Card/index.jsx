import React, { Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import Modal from "../Modal";

const Card = ({ project, index, web3Api }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [candidates, setCandidates] = useState([]);
  let [confirm, setConfirm] = useState(false);
  const [user, setUser] = useState("");
  let completeButtonRef = useRef(null);

  useEffect(() => {
    getAddress();
  });

  const getAddress = async () => {
    if (web3Api.provider) {
      let account = await web3Api.provider.request({
        method: "eth_requestAccounts",
      });
      if (account.length > 0) {
        setUser(account[0]);
      }
    }
  };

  async function openModal() {
    setCandidates(
      await web3Api.contract.methods.getCandidates(project.electionID).call()
    );
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function OpenConfirm() {
    closeModal();
    setConfirm(true);
  }

  function closeConfirm() {
    setConfirm(false);
    openModal();
  }

  return (
    <>
      <div
        onClick={openModal}
        class="p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Position: {project.position}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Start Date - {`${new Date(Number(project.startDate) * 1000)}`}
        </p>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
          initialFocus={completeButtonRef}
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full min-w-full items-center justify-center p-4">
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
                    Election
                    <div className="block text-2xl font-bold">for</div>
                    <div className="text-sm block italic">
                      {project.position}
                    </div>
                    <div className="text-sm">
                      Starts - {`${new Date(Number(project.startDate) * 1000)}`}
                    </div>
                    <div className="text-sm">
                      Ends - {`${new Date(Number(project.endDate) * 1000)}`}
                    </div>
                  </Dialog.Title>

                  <div className="relative p-6 flex-auto">Candidates</div>
                  <div className="relative p-6 flex-auto">Winner: none</div>
                  <div className="p-10">
                    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                      {candidates.map((candidate, index) => (
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="w-8 h-8 rounded-full"
                                src="candidate.jpg"
                                alt="Neil"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {candidate.name}
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {candidate.manifesto}
                              </p>
                              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                Vote For - {`${Number(candidate.voteCount)}`}
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              <button
                                className="hover:bg-blue-400 cursor-pointer"
                                onClick={OpenConfirm}
                              >
                                Vote
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
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

      {/* //confirm */}
      <Transition appear show={confirm} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeConfirm}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Confirmation
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      are you sure you want to vote for this candidate? you
                      cannot undo your vote.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeConfirm}
                    >
                      Yes
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

export default Card;
