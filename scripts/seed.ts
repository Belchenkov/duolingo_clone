const { drizzle } = require('drizzle-orm/neon-http');
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

import * as schema from '../db/schema';

const sql = neon(process.env.DB_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log('Seeding Database!');

        await deleteSchema();
        await insertData();

        console.log('Seeding Finished!');
    } catch (err) {
        console.error(err);
        throw new Error('Failed to seed the db!');
    }
};

const deleteSchema = async () => {
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
};

const insertData = async () => {
    await db.insert(schema.courses).values([
        {
            id: 1,
            title: 'Spanish',
            imageSrc: './es.svg',
        },
        {
            id: 2,
            title: 'French',
            imageSrc: './fr.svg',
        },
        {
            id: 3,
            title: 'English',
            imageSrc: './en.svg',
        },
        {
            id: 4,
            title: 'German',
            imageSrc: './de.svg',
        },
        {
            id: 5,
            title: 'Italian',
            imageSrc: './it.svg',
        },
        {
            id: 6,
            title: 'Croatian',
            imageSrc: './hr.svg',
        },
        {
            id: 7,
            title: 'Japanese',
            imageSrc: './jp.svg',
        },
    ]);
};

main().then();

