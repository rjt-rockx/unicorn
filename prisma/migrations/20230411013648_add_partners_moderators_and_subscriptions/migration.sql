-- CreateTable
CREATE TABLE "partner" (
    "userId" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "moderator" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "partnerId" TEXT NOT NULL,
    CONSTRAINT "moderator_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partner" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "member" (
    "memberId" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "partnerId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    CONSTRAINT "subscription_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partner" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "subscription_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member" ("memberId") ON DELETE RESTRICT ON UPDATE CASCADE
);
