const { db } = require('@vercel/postgres');
const { blogs, users } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedBlogs(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS blogs (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author_id UUID NOT NULL,
            author VARCHAR(255) NOT NULL,
        publish_date DATE NOT NULL,
        update_date DATE NOT NULL,
        tags VARCHAR(255),
        views INT DEFAULT 0,
        likes INT DEFAULT 0
    );    
`;

    console.log(`Created "blogs" table`);

    const insertedBlogs = await Promise.all(
      blogs.map((item) => {
        const {
          id,
          title,
          content,
          author_id,
          author,
          publish_date,
          update_date,
          tags,
          views,
          likes,
        } = item || {};
        return client.sql`
            INSERT INTO blogs (id, title, content, author_id, author, publish_date, update_date, tags, views, likes)
            VALUES (${id}, ${title}, ${content}, ${author_id}, ${author}, ${publish_date}, ${update_date}, ${tags}, ${views}, ${likes})
            ON CONFLICT (id) DO NOTHING;
          `;
      }),
    );

    console.log(`Seeded ${insertedBlogs.length} blog`);

    return {
      createTable,
      blogs: insertedBlogs,
    };
  } catch (error) {
    console.error('Error seeding blogs:', error);
    throw error;
  }
}

async function alterUsers(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const alterTable = await client.sql`
      ALTER TABLE users
      ADD COLUMN avatar TEXT,
      ADD COLUMN bio TEXT;
      `;

    return {
      alterTable,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedOnlinePlan(client) {
  try {
    const createTable =
      await client.sql`CREATE TABLE IF NOT EXISTS online_plan (
        id INT PRIMARY KEY,
        name VARCHAR(255),
        rdDepartment VARCHAR(255),
        qaDepartment VARCHAR(255),
        dutyQa VARCHAR(255),
        dutyRd VARCHAR(255),
        planType INT,
        processType INT,
        status INT,
        createBy VARCHAR(255),
        updateBy VARCHAR(255),
        createTime BIGINT,
        updateTime BIGINT,
        delFlag INT,
        projectOnlineTime BIGINT,
        isStopAddProject INT,
        startBuildStageTime BIGINT,
        endBuildStageTime BIGINT,
        source INT,
        onlineProgramId INT,
        bgOrgId INT,
        createSystemSource INT,
        bizId VARCHAR(255),
        jointOnlineId VARCHAR(255),
        onlineType INT,
        canUpdateUsers TEXT,
        canDelivery BOOLEAN,
        isGray BOOLEAN,
        jobNum INT
    );`;
    const insertedPlan = await Promise.all(
      [
        {
          id: 46169,
          name: '【外卖广告】【商家端】-20240115-上线计划',
          rdDepartment: '159803',
          qaDepartment: null,
          dutyQa: 'weichunyan',
          dutyRd: null,
          planType: 0,
          processType: 1,
          status: 20,
          createBy: 'weichunyan',
          updateBy: null,
          createTime: 1705308993000,
          updateTime: null,
          delFlag: 0,
          projectOnlineTime: 1705320000000,
          isStopAddProject: 0,
          startBuildStageTime: null,
          endBuildStageTime: null,
          source: 0,
          onlineProgramId: 103265,
          bgOrgId: 103100,
          createSystemSource: 0,
          bizId: null,
          jointOnlineId: null,
          onlineType: 0,
          canUpdateUsers: [
            'mouyufei',
            'liujunbing',
            'liguan03',
            'wanghe40',
            'weichunyan',
            'dingxiaopan',
            'lixuesong05',
          ],
          canDelivery: false,
          isGray: true,
          jobNum: 0,
        },
      ].map((item) => {
        const {
          id,
          name,
          rdDepartment,
          qaDepartment,
          dutyQa,
          dutyRd,
          planType,
          processType,
          status,
          createBy,
          updateBy,
          createTime,
          updateTime,
          delFlag,
          projectOnlineTime,
          isStopAddProject,
          startBuildStageTime,
          endBuildStageTime,
          source,
          onlineProgramId,
          bgOrgId,
          createSystemSource,
          bizId,
          jointOnlineId,
          onlineType,
          canUpdateUsers,
          canDelivery,
          isGray,
          jobNum,
        } = item || {};
        return client.sql`
          INSERT INTO online_plan (id, name, rdDepartment, qaDepartment, dutyQa, dutyRd, planType, processType, status, createBy, updateBy, createTime, updateTime, delFlag, projectOnlineTime, isStopAddProject, startBuildStageTime, endBuildStageTime, source, onlineProgramId, bgOrgId, createSystemSource, bizId, jointOnlineId, onlineType, canUpdateUsers, canDelivery, isGray, jobNum)
          VALUES (${id},
            ${name},
            ${rdDepartment},
            ${qaDepartment},
            ${dutyQa},
            ${dutyRd},
            ${planType},
            ${processType},
            ${status},
            ${createBy},
            ${updateBy},
            ${createTime},
            ${updateTime},
            ${delFlag},
            ${projectOnlineTime},
            ${isStopAddProject},
            ${startBuildStageTime},
            ${endBuildStageTime},
            ${source},
            ${onlineProgramId},
            ${bgOrgId},
            ${createSystemSource},
            ${bizId},
            ${jointOnlineId},
            ${onlineType},
            ${JSON.stringify(canUpdateUsers || [])},
            ${canDelivery},
            ${isGray},
            ${jobNum}
            )
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    return {
      createTable,
      insertedPlan,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  //   await seedBlogs(client);

  await seedOnlinePlan(client);

  // await alterUsers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
