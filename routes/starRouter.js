import { Router } from "express";
import {
    getStarById,
    getStars,
    postStart,
    getCursos,
    getCursoById,
    postCurso,
    // patchCurso
    deleteCurso
} from '../controllers/starController.mjs';

const router = Router();

router.get('/stars', getStars);

router.get('/stars/:id', getStarById)

router.post('/stars', postStart)

//CURSOS


router.get('/cursos/', getCursos)

router.get('/cursos/:id', getCursoById)

router.post('/cursos', postCurso)


// router.patch('/curso/:id', patchCurso)

router.delete('/curso', deleteCurso)

export default router;