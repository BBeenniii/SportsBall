import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Csapatok listázása
router.get('/', async (req, res) => {
  const teams = await prisma.team.findMany({ include: { players: true } });
  res.json(teams);
});

// Csapat létrehozása
router.post('/', async (req, res) => {
  const { country } = req.body;
  const team = await prisma.team.create({ data: { country } });
  res.status(201).json(team);
});

// Csapat módosítása
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { country } = req.body;
  const team = await prisma.team.update({ where: { id: Number(id) }, data: { country } });
  res.json(team);
});

// Csapat törlése
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.team.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

export default router;