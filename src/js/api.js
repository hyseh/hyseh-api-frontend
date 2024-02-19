export async function getQuotes() {
  try {
    const res = await fetch('https://hyseh-api.onrender.com/api/quotes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.error) {
      console.log(data.error);
    } else {
      return data.quotes;
    }
  } catch (error) {
    throw new Error('An error occured when trying to fetch quotes', error);
  }
}

export async function getQuote(id) {
  try {
    const res = await fetch(`https://hyseh-api.onrender.com/api/quotes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.error) {
      console.log(data.error);
    } else {
      return data.quote[0];
    }
  } catch (error) {
    throw new Error('An error occured when trying to fetch a quote', error);
  }
}

export async function createQuote(author, content) {
  try {
    const res = await fetch('https://hyseh-api.onrender.com/api/quotes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, content }),
    });

    const data = await res.json();
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  } catch (error) {
    throw new Error('An error occured when trying to create a quote', error);
  }
}

export async function updateQuote(id, author, content) {
  try {
    const res = await fetch(`https://hyseh-api.onrender.com/api/quotes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, content }),
    });

    const data = await res.json();
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  } catch (error) {
    throw new Error('An error occured when trying to update a quote', error);
  }
}

export async function deleteQuote(id) {
  try {
    const res = await fetch(`https://hyseh-api.onrender.com/api/quotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error('An error occured when trying to delete a quote', error);
  }
}
