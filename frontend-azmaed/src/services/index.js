export const registerUserService = async ({
  email,
  password,
  name,
  surname,
}) => {
  const response = await fetch(` ${process.env.REACT_APP_BACKEND}/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password, name, surname }),
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const saveNoteService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  console.log(json.data);
  return json.data;
};

export const getAllNotesService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes`, {
    headers: {
      Authorization: token,
    }
  });


  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSingleNoteService = async ({id, token}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes/${id}`, {
    headers: {
      Authorization: token,
    },
});

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
export const getPublicNoteService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notes/public/${id}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const editNoteService = async ({ id, token, data }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes/${id}`, {
    method: "PUT",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
/* response.blob */
export const addImageService = async ({ id, token, data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notes/${id}/images`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const deleteImageService = async ({ id, token, imageID }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notes/${id}/images/${imageID}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const deleteNoteService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/notes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

/* private es una palabra reservada */
export const privateNoteService = async ({ id, token, data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/notes/public/${id}`,
    {
      method: "PUT",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getCategoryService = async ({token}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/category`, {
    headers: {
      Authorization: token,
    },
   });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const saveCategoryService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/category`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const editCategoryService = async ({ id, token, data }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/category/${id}`,
    {
      method: "PUT",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const deleteCategoryService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/category/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
