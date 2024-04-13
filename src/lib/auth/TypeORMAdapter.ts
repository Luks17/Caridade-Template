import { SessionService } from "@/database/services/SessionService";
import { UsuarioService } from "@/database/services/UsuarioService";
import { Adapter, DatabaseSession, DatabaseUser } from "lucia";

export class TypeORMAdapter implements Adapter {
  async deleteExpiredSessions(): Promise<void> {
    await SessionService.deleteAllExpired();
  }

  async deleteSession(sessionId: string): Promise<void> {
    await SessionService.deleteById(sessionId);
  }

  async deleteUserSessions(userId: string): Promise<void> {
    await SessionService.deleteAllByUserId(userId);
  }

  async getSessionAndUser(
    sessionId: string,
  ): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> {
    const sessionDb = await SessionService.findOne(sessionId);

    if (!sessionDb) {
      return [null, null];
    }

    const session: DatabaseSession = {
      id: sessionDb.id,
      expiresAt: sessionDb.expires_at,
      userId: sessionDb.usuario_id,
      attributes: {},
    };

    const userDb = await UsuarioService.findOne({ id: sessionDb.usuario_id });

    if (!userDb) {
      return [session, null];
    }

    const user: DatabaseUser = {
      id: userDb.id,
      attributes: {
        role: "",
        ...userDb,
      },
    };

    return [session, user];
  }

  async getUserSessions(userId: string): Promise<DatabaseSession[]> {
    const dbSessions = await SessionService.findAllByUserId(userId);

    return dbSessions.map((session) => ({
      id: session.id,
      userId: session.usuario_id,
      expiresAt: session.expires_at,
      attributes: {},
    }));
  }

  async setSession(session: DatabaseSession): Promise<void> {
    await SessionService.new(session.id, session.expiresAt, session.userId);
  }

  async updateSessionExpiration(
    sessionId: string,
    expiresAt: Date,
  ): Promise<void> {
    await SessionService.update(sessionId, expiresAt);
  }
}
