import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req, res) => {
  const players = await prisma.player.findMany({ include: { team: true } });
  res.json(players);
});

router.post('/', async (req, res) => {
  const { name, goalCount, birthDate, teamId } = req.body;
  const player = await prisma.player.create({
    data: { name, goalCount, birthDate: new Date(birthDate), teamId },
  });
  res.status(201).json(player);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, goalCount, birthDate, teamId } = req.body;
  const player = await prisma.player.update({
    where: { id: Number(id) },
    data: { name, goalCount, birthDate: new Date(birthDate), teamId },
  });
  res.json(player);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.player.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

export default router;