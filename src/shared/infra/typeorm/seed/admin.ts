import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const password = hash("admin", 8);

  console.log("Aqui");

  await connection.query(
    `insert into users(id, name, email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'xxxxxxxx')`
  );

  console.log("Aqui");

  await connection.close();
}

create().then(() => console.log("user admin created!"));
