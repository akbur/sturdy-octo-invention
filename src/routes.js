import express from 'express';
import {
  getAllResources,
  getResource,
  addResource,
} from './controller';

const test = () => {
  console.log('test');
};

const router = express.Router();

router.get('/', test);
router.get('/resources', getAllResources);
router.get('/resources/:resourceId', getResource);
router.post('/resources/', addResource);

export default router;