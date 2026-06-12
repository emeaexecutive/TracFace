import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-tracface-black">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-tracface-white mb-4">
            TracFace
          </h1>
          <p className="text-xl text-tracface-muted mb-8">
            Trust infrastructure for humans and AI agents
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-3 bg-tracface-green text-tracface-black rounded font-semibold hover:opacity-90"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 bg-tracface-line text-tracface-white rounded font-semibold hover:bg-tracface-panel"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-tracface-line rounded">
            <h3 className="text-lg font-semibold text-tracface-green mb-2">
              Verify Identities
            </h3>
            <p className="text-tracface-muted">
              Onboard and verify humans with secure, auditable profiles.
            </p>
          </div>

          <div className="p-6 border border-tracface-line rounded">
            <h3 className="text-lg font-semibold text-tracface-green mb-2">
              Register Agents
            </h3>
            <p className="text-tracface-muted">
              Register AI agents with cryptographic identity and trust scores.
            </p>
          </div>

          <div className="p-6 border border-tracface-line rounded">
            <h3 className="text-lg font-semibold text-tracface-green mb-2">
              Trust Passports
            </h3>
            <p className="text-tracface-muted">
              Generate verifiable trust documents with complete audit trails.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
