const OFFICIAL_EMAIL = "vipin1589.be23@chitkarauniversity.edu.in";

function success(res, data) {
  return res.status(200).json({
    is_success: true,
    official_email: OFFICIAL_EMAIL,
    data
  });
}

function failure(res, status) {
  return res.status(status).json({
    is_success: false,
    official_email: OFFICIAL_EMAIL
  });
}

const handlers = {
  fibonacci: require("../services/fibonacci"),
  prime: require("../services/primes"),
  lcm: require("../services/lcm"),
  hcf: require("../services/hcf"),
  ai: require("../services/ai")
};

async function handleRequest(req, res) {
  try {
    const body = req.body;

    if (!body || typeof body !== "object") {
      return failure(res, 400);
    }

    const allowedKeys = ["fibonacci", "prime", "lcm", "hcf", "AI"];
    const presentKeys = Object.keys(body).filter(k =>
      allowedKeys.includes(k)
    );

    if (presentKeys.length !== 1) {
      return failure(res, 400);
    }

    const keyRaw = presentKeys[0];
    const key = keyRaw.toLowerCase();


    if (key === "fibonacci") {
      const n = body[keyRaw];
      if (!Number.isInteger(n) || n < 0) return failure(res, 400);
      return success(res, handlers.fibonacci(n));
    }


    if (key === "prime") {
      const arr = body[keyRaw];
      if (!Array.isArray(arr) || arr.some(x => !Number.isInteger(x))) {
        return failure(res, 400);
      }
      return success(res, handlers.prime(arr));
    }

    if (key === "lcm") {
      const arr = body[keyRaw];
      if (!Array.isArray(arr) || arr.length === 0 || arr.some(x => !Number.isInteger(x))) {
        return failure(res, 400);
      }
      return success(res, handlers.lcm(arr));
    }

    if (key === "hcf") {
      const arr = body[keyRaw];
      if (!Array.isArray(arr) || arr.length === 0 || arr.some(x => !Number.isInteger(x))) {
        return failure(res, 400);
      }
      return success(res, handlers.hcf(arr));
    }

    if (key === "ai") {
      const q = body[keyRaw];
      if (typeof q !== "string" || !q.trim()) {
        return failure(res, 400);
      }
      const answer = await handlers.ai(q);
      return success(res, answer);
    }

    return failure(res, 400);
  } catch (err) {

    return failure(res, 500);
  }
}

module.exports = { handleRequest };
