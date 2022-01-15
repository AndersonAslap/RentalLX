import { hash } from "bcrypt";
import { createConnection } from "typeorm";
import { v4 as uuidv4 } from "uuid";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const password = hash("admin", 8);

  await connection.query(
    `insert into users(id, name, email, password, "isAdmin", created_at, driver_license)
      values(${id}, 'admin', 'admin@rentx.com.br', ${password}, true, NOW(), 'xxxxxxxx'}`
  );

  await connection.close();
}

create().then(() => console.log("user admin created!"));
