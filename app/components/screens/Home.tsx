"use client";

import dynamic from "next/dynamic";
import { INGREDIENTS, RECIPES, SAMPLES } from "@/lib/data";
import { copy } from "@/lib/copy";
import { rp } from "@/lib/format";
import { useMediaQuery } from "@/lib/useMedia";
import { FoodArt } from "../FoodArt";
import { Icon } from "../Icon";

const PantryScene = dynamic(() => import("../three/PantryScene"), { ssr: false });

export function Home({
  onStart,
  onSample,
  hasSession,
  onResume,
  budget,
}: {
  onStart: () => void;
  onSample: (id: string) => void;
  hasSession: boolean;
  onResume: () => void;
  budget: number;
}) {
  const wide = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="screen-inner home">
      <header className="home-head mob">
        <span className="wordmark">{copy.brand.name}</span>
        <p className="tagline">{copy.brand.tagline}</p>
      </header>

      <section className="hero">
        <FoodArt
          plain
          art={0}
          className="hero-art mob"
          scale={1.05}
          cx={64}
          cy={30}
          label={copy.home.heroArtLabel}
        />

        <div className="hero-copy">
          <span className="eyebrow">{copy.home.eyebrow}</span>
          <h1>{copy.home.heroTitle}</h1>
          <p>{copy.home.heroBody}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={onStart}>
              <Icon name="camera" size={20} />
              {copy.home.cta}
            </button>
            {hasSession && (
              <button type="button" className="btn btn-ghost btn-lg" onClick={onResume}>
                <Icon name="clock" size={18} />
                {copy.home.resumeTitle}
              </button>
            )}
          </div>
          <p className="fine hero-fine">{copy.home.budgetNote(rp(budget))}</p>
        </div>

        <div className="hero-visual desk" aria-hidden={!wide}>
          {wide && <PantryScene className="hero-scene" />}
          <span className="scene-caption">{copy.home.sceneCaption}</span>
          <span className="scene-hint">{copy.desktop.sceneHint}</span>
        </div>
      </section>

      <section className="home-section">
        <div className="section-head">
          <h2>{copy.home.samplesTitle}</h2>
          <span className="muted small">{copy.home.samplesNote}</span>
        </div>
        <div className="hscroll" role="list">
          {SAMPLES.map((sample, index) => (
            <button
              key={sample.id}
              type="button"
              role="listitem"
              className="sample-card"
              onClick={() => onSample(sample.id)}
            >
              <span className="sample-art">
                <FoodArt art={index + 2} />
                <span className="sample-scrim" aria-hidden="true" />
                <span className="sample-title">{sample.label}</span>
              </span>
              <span className="sample-note">{sample.note}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section home-how">
        <div className="section-head">
          <h2>{copy.home.howTitle}</h2>
        </div>
        <ol className="steps-list">
          {copy.home.how.map((step, index) => (
            <li key={step.title}>
              <span className="step-num">{index + 1}</span>
              <span>
                <strong>{step.title.replace(/^\d+\.\s*/, "")}</strong>
                <span className="muted">{step.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <div className="stats-row desk">
        {copy.home.stats(RECIPES.length, INGREDIENTS.length).map((stat) => (
          <div key={stat.label} className="stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
