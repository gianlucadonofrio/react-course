import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setIsSaving,
  setNotes,
  setPhotosToActiveNote,
  updateNote,
} from "./journalSlide";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDocument = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDocument, newNote);

    newNote.id = newDocument.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("No user logged in");

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSavingNote = (note) => {
  return async (dispatch, getState) => {
    dispatch(setIsSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToSave = { ...note };
    delete noteToSave.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToSave, { merge: true });
    dispatch(updateNote(note));
  };
};
export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setIsSaving());
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }
    const photosURLS = await Promise.all(fileUploadPromises);
    dispatch(setPhotosToActiveNote(photosURLS));
  };
};
export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(note.id));
  };
};
